#include "T200TuiWin10.h"

#include <windows.h>


T200TuiWin10::T200TuiWin10()
{
    //ctor
}

T200TuiWin10::~T200TuiWin10()
{
    //dtor
}

T200VOID T200TuiWin10::moveto(T200INT x, T200INT y)
{
    COORD   coord;

    coord.X = x;
    coord.Y = y;

    SetConsoleCursorPosition(GetStdHandle(STD_OUTPUT_HANDLE), coord);
}
