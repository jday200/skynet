#include "T200LibTuiTest.h"

#include "T200LibTui.h"


T200LibTuiTest::T200LibTuiTest()
{
    //ctor
}

T200LibTuiTest::~T200LibTuiTest()
{
    //dtor
}

T200BOOL T200LibTuiTest::test_all()
{
    T200LibTui      tui;

    tui.print("Hello world!");

    tui.print("Tui testing...");

    return T200FALSE;
}
