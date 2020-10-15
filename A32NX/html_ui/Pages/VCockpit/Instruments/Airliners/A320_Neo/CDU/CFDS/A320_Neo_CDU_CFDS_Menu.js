class CDUCfdsMainMenu {
    static ShowPage(mcdu) {
        mcdu.clearDisplay();
        mcdu.activeSystem = 'CFDS';
        mcdu.setTemplate([
            ["CFDS", "1", "2"],
            [""],
            ["<LAST LEG REPORT"],
            [""],
            ["<LAST LEG ECAM REPORT"],
            [""],
            ["<PREVIOUS LEGS REPORT"],
            [""],
            ["<AVIONICS STATUS"],
            [""],
            ["<SYSTEM REPORT / TEST"],
            ["", "", "POST"],
            ["*SEND[color]blue", "PRINT*[color]blue", "FLT REP"]
        ]);

        mcdu.onLeftInput[0] = () => {
            mcdu.showErrorMessage("NOT YET IMPLEMENTED");
            setTimeout(() => {
                mcdu.showErrorMessage("");
            }, 1000);
        }
        mcdu.onLeftInput[1] = () => {
            mcdu.showErrorMessage("NOT YET IMPLEMENTED");
            setTimeout(() => {
                mcdu.showErrorMessage("");
            }, 1000);
        }
        mcdu.onLeftInput[2] = () => {
            mcdu.showErrorMessage("NOT YET IMPLEMENTED");
            setTimeout(() => {
                mcdu.showErrorMessage("");
            }, 1000);
        }
        mcdu.onLeftInput[5] = () => {
            mcdu.showErrorMessage("NOT YET IMPLEMENTED");
            setTimeout(() => {
                mcdu.showErrorMessage("");
            }, 1000);
        }
        mcdu.onRightInput[5] = () => {
            mcdu.showErrorMessage("NOT YET IMPLEMENTED");
            setTimeout(() => {
                mcdu.showErrorMessage("");
            }, 1000);
        }

        // IMPLEMENTED BUTTONS
        mcdu.onLeftInput[3] = () => {
            CDUCfdsAvionicsMenu.ShowPage(mcdu);
        }
        mcdu.onLeftInput[4] = () => {
            CDUCfdsTestMenu.ShowPage(mcdu);
        }

        // PAGE SWITCHING
        mcdu.onPrevPage = () => {
            CDUCfdsMainMenu.ShowPage2(mcdu);
        };
        mcdu.onNextPage = () => {
            CDUCfdsMainMenu.ShowPage2(mcdu);
        };
    }

    static ShowPage2(mcdu) {
        mcdu.clearDisplay();

        mcdu.setTemplate([
            ["CFDS", "2", "2"],
            [""],
            ["<GMT/DATE INIT"],
            [""],
            [""],
            [""],
            [""],
            [""],
            ["<PFR FILTER PROGRAM"],
            [""],
            ["<PASSWORD CHANGE"],
            [""],
            [""]
        ]);

        // INOP BUTTONS
        mcdu.onLeftInput[0] = () => {
            mcdu.showErrorMessage("NOT YET IMPLEMENTED");
            setTimeout(() => {
                mcdu.showErrorMessage("");
            }, 1000);
        }
        mcdu.onLeftInput[3] = () => {
            mcdu.showErrorMessage("NOT YET IMPLEMENTED");
            setTimeout(() => {
                mcdu.showErrorMessage("");
            }, 1000);
        }
        mcdu.onLeftInput[4] = () => {
            mcdu.showErrorMessage("NOT YET IMPLEMENTED");
            setTimeout(() => {
                mcdu.showErrorMessage("");
            }, 1000);
        }

        // PAGE SWITCHING
        mcdu.onPrevPage = () => {
            CDUCfdsMainMenu.ShowPage(mcdu);
        };
        mcdu.onNextPage = () => {
            CDUCfdsMainMenu.ShowPage(mcdu);
        };
    }
}