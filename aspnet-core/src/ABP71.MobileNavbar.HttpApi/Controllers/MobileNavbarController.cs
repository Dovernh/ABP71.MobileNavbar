using ABP71.MobileNavbar.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace ABP71.MobileNavbar.Controllers;

/* Inherit your controllers from this class.
 */
public abstract class MobileNavbarController : AbpControllerBase
{
    protected MobileNavbarController()
    {
        LocalizationResource = typeof(MobileNavbarResource);
    }
}
