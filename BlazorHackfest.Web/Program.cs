using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;

using BlazorHackfest.Web.Pages;

var builder = WebAssemblyHostBuilder.CreateDefault(args);

builder.Services.AddScoped(sp => new HttpClient {BaseAddress = new Uri(builder.HostEnvironment.BaseAddress)});
builder.RootComponents.RegisterAsCustomElement<CommentTable>("nic-component");
builder.RootComponents.RegisterAsCustomElement<CommentAntD>("comment-antd");
builder.Services.AddAntDesign();
await builder.Build().RunAsync();