function OnStart() {
    

    lay = app.CreateLayout("Linear", "VCenter,FillXY");

    web = app.CreateWebView(1,1,"IgnoreErrors");
    web.LoadUrl("index.html");
    lay.AddChild(web);


    app.AddLayout(lay);
}
