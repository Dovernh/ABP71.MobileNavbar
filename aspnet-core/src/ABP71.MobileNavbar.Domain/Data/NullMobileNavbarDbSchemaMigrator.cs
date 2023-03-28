using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace ABP71.MobileNavbar.Data;

/* This is used if database provider does't define
 * IMobileNavbarDbSchemaMigrator implementation.
 */
public class NullMobileNavbarDbSchemaMigrator : IMobileNavbarDbSchemaMigrator, ITransientDependency
{
    public Task MigrateAsync()
    {
        return Task.CompletedTask;
    }
}
