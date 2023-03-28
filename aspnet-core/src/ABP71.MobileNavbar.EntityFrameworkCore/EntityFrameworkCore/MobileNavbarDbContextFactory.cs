using System;
using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace ABP71.MobileNavbar.EntityFrameworkCore;

/* This class is needed for EF Core console commands
 * (like Add-Migration and Update-Database commands) */
public class MobileNavbarDbContextFactory : IDesignTimeDbContextFactory<MobileNavbarDbContext>
{
    public MobileNavbarDbContext CreateDbContext(string[] args)
    {
        MobileNavbarEfCoreEntityExtensionMappings.Configure();

        var configuration = BuildConfiguration();

        var builder = new DbContextOptionsBuilder<MobileNavbarDbContext>()
            .UseSqlServer(configuration.GetConnectionString("Default"));

        return new MobileNavbarDbContext(builder.Options);
    }

    private static IConfigurationRoot BuildConfiguration()
    {
        var builder = new ConfigurationBuilder()
            .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), "../ABP71.MobileNavbar.DbMigrator/"))
            .AddJsonFile("appsettings.json", optional: false);

        return builder.Build();
    }
}
