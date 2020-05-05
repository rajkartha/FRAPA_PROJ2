"""
Routes and views for the flask application.
"""

#################################################
# Flask Application
#################################################

# Dependencies and Setup
import os

import pandas as pd
import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, inspect, func, and_
from sqlalchemy import Column, Integer, Float, String
from flask import Flask, jsonify, render_template, request, url_for, redirect
from flask_sqlalchemy import SQLAlchemy

#################################################
# Flask Setup
#################################################
app = Flask(__name__)


#################################################
# Database Connection Setup
#################################################

# print(os.environ.get('DATABASE_URL', ''))
# app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL', '') or "sqlite:///db/restaurants.sqlite"
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///db/restaurants.sqlite"
# engine = create_engine("sqlite:///db/restaurants.sqlite")

db = SQLAlchemy(app)
# from .restaurants import eateries

# Reflect Existing Database Into a New Model
Base = automap_base()

# Reflect the Tables
Base.prepare(db.engine, reflect=True)
Toprest = Base.classes.top_rest
# RestTable = Base.classes.rest_table
# TopRestPerCategory = Base.classes.top_rest_per_category
# TotalByCategory = Base.classes.total_by_category


#################################################
# Flask Setup
#################################################
# app = Flask(__name__)
#################################################
# Flask Routes
#################################################
@app.route("/")
@app.route('/index')
def index():
    """Renders the home page."""
    return render_template(
        'index.html'
    )

@app.route('/plots')
def plots():
    """Renders the plots page."""
    return render_template(
        'plots.html'
    )

@app.route('/geomapping')
def geomapping():
    """Renders the geomapping page."""
    return render_template(
        'geomapping.html'
    )

@app.route('/financials')
def financials():
    """Renders the geomapping page."""
    return render_template(
        'financials.html'
    )
# def welcome():
#     """List all available api routes."""
#     return (
#         f"Available Routes:<br/>"
#         f"/api/v1.0/names<br/>"
#         f"/api/v1.0/categories"
#     )
@app.route("/api/v1.0/names")
def category():
    # Create our session (link) from Python to the DB
    # session = Session(db.engine)
    """Return a list of all category names"""
    # Query all categories
    results = db.session.query(Toprest.Category).all()
    db.session.close()
    # Convert list of tuples into normal list
    all_names = list(np.ravel(results))
    print(all_names)
    return jsonify(all_names)
@app.route("/api/v1.0/categories")
def categories():
    # Create our session (link) from Python to the DB
    # session = Session(db.engine)
    """Return a list of Categories data including the Catgeory ,company name, State, sales"""
    # Query all categories
    results = db.session.query(Toprest.Category, Toprest.Company, Toprest.Systemwide_Sales_Millions, Toprest.Latitude,Toprest.Longitude,Toprest.State).all()
    db.session.close()
    # Create a dictionary from the row data and append to a list of all_passengers
    all_categories = []
    for Category,Company, Systemwide_Sales_Millions,Latitude, Longitude, State in results:
        category_dict = {}
        category_dict["Category"] = Category
        category_dict["Company"] = Company
        category_dict["Systemwide_Sales_Millions"] = Systemwide_Sales_Millions
        category_dict["Latitude"] = Latitude
        category_dict["Longitude"] = Longitude
        category_dict["State"] = State
        all_categories.append(category_dict)
    return jsonify(all_categories)


if __name__ == '__main__':
    app.run(debug=True)