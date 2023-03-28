using Volo.Abp.Modularity;

namespace ABP71.MobileNavbar;

[DependsOn(
    typeof(MobileNavbarApplicationModule),
    typeof(MobileNavbarDomainTestModule)
    )]
public class MobileNavbarApplicationTestModule : AbpModule
{

}
