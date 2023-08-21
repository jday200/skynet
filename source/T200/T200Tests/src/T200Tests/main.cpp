#include "T200TestTest.h"
#include "T200TuiTest.h"


int main()
{
    T200TestTest        test;
    T200TuiTest         tui;

    tui.test_all();

    return test.run();
}
