#include "T200TestTui.h"

#include "T200AppTui.h"


T200TestTui::T200TestTui()
{
    //ctor
}

T200TestTui::~T200TestTui()
{
    //dtor
}

T200INT T200TestTui::test_all()
{
    T200AppTui      tui;

    tui.run();

    return -1;
}
