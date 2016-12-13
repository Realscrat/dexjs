/**
 *
 * This module provides D3 based visualization components.
 *
 * @module dex/charts/d3
 * @name d3
 * @memberOf dex.charts
 *
 */
var d3 = {};

/**
 *
 * A class for drawing an axis.
 *
 * @name Axis
 *
 */
d3.Axis = require("./Axis");
d3.Chord = require("./Chord");
d3.ClusteredForce = require("./ClusteredForce");
d3.Dendrogram = require("./Dendrogram");
d3.Force = require("./Force");
d3.HeatMap = require("./HeatMap");
d3.HorizonChart = require("./HorizonChart");
d3.HorizontalLegend = require("./HorizontalLegend");
d3.LineChart = require("./LineChart");
d3.MotionBarChart = require("./MotionBarChart");
d3.MotionChart = require("./MotionChart");
d3.MotionCircleChart = require("./MotionCircleChart");
d3.MotionLineChart = require("./MotionLineChart");
d3.OrbitalLayout = require("./OrbitalLayout");
d3.ParallelCoordinates = require("./ParallelCoordinates");
d3.ParallelCoordinates2 = require("./ParallelCoordinates2");
d3.PieChart = require("./PieChart");
d3.RadarChart = require("./RadarChart");
d3.RadialTree = require("./RadialTree");
d3.Sankey = require("./Sankey");
d3.SankeyParticles = require("./SankeyParticles");
d3.ScatterPlot = require("./ScatterPlot");
d3.Sunburst = require("./Sunburst");
d3.TitledTreemap = require("./TitledTreemap");
d3.Treemap = require("./Treemap");
d3.VerticalLegend = require("./VerticalLegend");

// Too large, need optional config
//d3.map = require("./map/map");

module.exports = d3;