using ABP71.MobileNavbar.Localization;
using Volo.Abp.Application.Services;

namespace ABP71.MobileNavbar;

/* Inherit your application services from this class.
 */
public abstract class MobileNavbarAppService : ApplicationService
{
    protected MobileNavbarAppService()
    {
        LocalizationResource = typeof(MobileNavbarResource);
    }
}
