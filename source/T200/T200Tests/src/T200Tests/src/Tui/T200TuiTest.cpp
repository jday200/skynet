#include "T200TuiTest.h"

#include "Tui/T200AppTui.h"


T200TuiTest::T200TuiTest()
{
    //ctor
}

T200TuiTest::~T200TuiTest()
{
    //dtor
}

T200TuiTest::T200TuiTest(const T200TuiTest& other)
{
    //copy ctor
}

T200BOOL T200TuiTest::test_all()
{
    T200AppTui      tui;

    tui.run();

    return T200FALSE;
}
