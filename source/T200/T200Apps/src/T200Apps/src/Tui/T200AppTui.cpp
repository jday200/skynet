#include "T200AppTui.h"

#include "Tui/T200LibTui.h"


T200AppTui::T200AppTui()
{
    //ctor
}

T200AppTui::~T200AppTui()
{
    //dtor
}

T200VOID T200AppTui::run()
{
    T200LibTui      tui;

    tui.moveto(10, 10);

    tui.print("Hello");

    tui.moveto(20, 20);

    tui.print("World!");

    tui.moveto(10, 10);

    tui.print("Start");

    tui.moveto(0, 25);
}
