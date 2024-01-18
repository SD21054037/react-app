﻿using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;
using Microsoft.EntityFrameworkCore;

namespace Server
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
// using DemoApp.Data;
// using Server.Services.YourDbContext;
// using Microsoft.EntityFrameworkCore; 

// var builder = WebApplication.CreateBuilder(args);

// // Add services to the container.
// var conn = builder.Configuration.GetConnectionString("DefaultConnection");

// builder.Services.AddDbContext<YourDbContext>(options =>
//     options.UseNpgsql(conn));

// builder.Services.AddControllers();
// builder.Services.AddEndpointsApiExplorer();
// builder.Services.AddSwaggerGen();

// // Adding CORS policy
// builder.Services.AddCors(options =>
// {
//     options.AddPolicy("AllowAll",
//         builder => builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());
// });

// var app = builder.Build();

// // Configure the HTTP request pipeline.
// if (app.Environment.IsDevelopment())
// {
//     app.UseSwagger();
//     app.UseSwaggerUI();
// }

// // Using CORS policy
// app.UseCors("AllowAll");

// //app.UseHttpsRedirection();

// app.UseAuthorization();

// //app.UseEndpoints(endpoints => {endpoints.MapControllers()});
// app.MapControllers();

// // Apply EF Core migrations
// using (var scope = app.Services.CreateScope())
// {
//     var dbContext = scope.ServiceProvider.GetRequiredService<ApiDbContext>();
//     dbContext.Database.Migrate();
// }

// app.Run();
