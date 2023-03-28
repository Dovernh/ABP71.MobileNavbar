using System.Threading.Tasks;

namespace ABP71.MobileNavbar.Data;

public interface IMobileNavbarDbSchemaMigrator
{
    Task MigrateAsync();
}
