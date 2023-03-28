using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using ABP71.MobileNavbar.Data;
using Volo.Abp.DependencyInjection;

namespace ABP71.MobileNavbar.EntityFrameworkCore;

public class EntityFrameworkCoreMobileNavbarDbSchemaMigrator
    : IMobileNavbarDbSchemaMigrator, ITransientDependency
{
    private readonly IServiceProvider _serviceProvider;

    public EntityFrameworkCoreMobileNavbarDbSchemaMigrator(IServiceProvider serviceProvider)
    {
        _serviceProvider = serviceProvider;
    }

    public async Task MigrateAsync()
    {
        /* We intentionally resolving the MobileNavbarDbContext
         * from IServiceProvider (instead of directly injecting it)
         * to properly get the connection string of the current tenant in the
         * current scope.
         */

        await _serviceProvider
            .GetRequiredService<MobileNavbarDbContext>()
            .Database
            .MigrateAsync();
    }
}
