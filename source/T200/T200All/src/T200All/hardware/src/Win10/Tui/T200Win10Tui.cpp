#include "T200Win10Tui.h"

#include <iostream>
#include <windows.h>


T200Win10Tui::T200Win10Tui()
{
    //ctor
}

T200Win10Tui::~T200Win10Tui()
{
    //dtor
}

T200VOID T200Win10Tui::moveto(T200INT x, T200INT y)
{
    COORD       coord;

    coord.X = x;
    coord.Y = y;

    SetConsoleCursorPosition(GetStdHandle(STD_OUTPUT_HANDLE), coord);
}

T200VOID T200Win10Tui::print(T200String msg)
{
    std::cout << msg;
}
