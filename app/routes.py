from flask_pymongo import PyMongo
from flask import *
from app import app
from flask import make_response
import hashlib

from bson.objectid import ObjectId
import os
import urllib.request
from flask import Flask, flash, request, redirect, render_template
from werkzeug.utils import secure_filename

mongo = PyMongo(app, uri="mongodb://localhost:27017/data")


def url_short(url):
    hashed_url = hashlib.sha256(url.encode()).hexdigest()
    tiny_url = hashed_url[:8]
    return tiny_url


@app.route('/', methods=['GET', 'POST'])
def admin():
    if request.method == 'GET':
        temp_url = ""
        return render_template("admin.html", temp_url=temp_url)
    elif request.method == 'POST':
        initial_url = request.form['input_url']
        short_url = url_short(initial_url)
        new_entry = {"initial_url": initial_url, "short_url": short_url}
        mongo.db.url_db.insert(new_entry)
        temp_url = request.base_url + "redirect/" + short_url
        return render_template("admin.html", temp_url=temp_url)


@app.route('/redirect/<short_url>', methods=['GET'])
def redirect_page(short_url):
    data = mongo.db.url_db.find_one_or_404({"short_url": short_url})
    redirect_url = data["initial_url"]
    return redirect(redirect_url, code=302)