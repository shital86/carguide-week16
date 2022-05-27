package au.com.carguide;

import au.com.carguide.propertyreader.PropertyReader;
import au.com.carguide.utility.Utility;
import cucumber.api.java.Before;

public class Hooks extends Utility {
    @Before
    public void setUp() {
        selectBrowser(PropertyReader.getInstance().getProperty("browser"));
    }

//    @After
//    public void tearDown(Scenario scenario) {
//        if (scenario.isFailed()) {
//            String screenShotPath = Utility.getScreenshot(driver, scenario.getName().replace(" ", "_"));
//            try {
//                Reporter.addScreenCaptureFromPath(screenShotPath);
//            } catch (IOException e) {
//                e.printStackTrace();
//            }
//        }
//        closeBrowser();
//
//    }
}
