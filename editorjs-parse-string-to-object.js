const express= require('express');

module.exports= function editorJsParseStringToObject(req,res,next) {
    if(req.body.editorjs)
    {
	req.body.editorjs=JSON.parse(req.body.editorjs);
	next();
    }
    else
	next(new Error("req.body.editorjs is empty"));
};
