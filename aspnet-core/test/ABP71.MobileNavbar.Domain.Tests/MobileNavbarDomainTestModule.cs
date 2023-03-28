using ABP71.MobileNavbar.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace ABP71.MobileNavbar;

[DependsOn(
    typeof(MobileNavbarEntityFrameworkCoreTestModule)
    )]
public class MobileNavbarDomainTestModule : AbpModule
{

}
