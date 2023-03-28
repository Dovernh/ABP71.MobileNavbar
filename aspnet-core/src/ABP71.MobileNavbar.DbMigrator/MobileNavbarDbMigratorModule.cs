using ABP71.MobileNavbar.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.Modularity;

namespace ABP71.MobileNavbar.DbMigrator;

[DependsOn(
    typeof(AbpAutofacModule),
    typeof(MobileNavbarEntityFrameworkCoreModule),
    typeof(MobileNavbarApplicationContractsModule)
)]
public class MobileNavbarDbMigratorModule : AbpModule
{

}
