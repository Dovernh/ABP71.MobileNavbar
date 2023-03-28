using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace ABP71.MobileNavbar;

[Dependency(ReplaceServices = true)]
public class MobileNavbarBrandingProvider : DefaultBrandingProvider
{
    public override string AppName => "MobileNavbar";
}
