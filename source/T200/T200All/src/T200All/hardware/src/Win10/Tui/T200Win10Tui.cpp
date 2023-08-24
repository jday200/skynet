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

T200VOID T200Win10Tui::get_info()
{
    HANDLE  console = GetStdHandle(STD_OUTPUT_HANDLE);
    CONSOLE_SCREEN_BUFFER_INFO  info;

    if(GetConsoleScreenBufferInfo(console, &info)){
        m_width     = info.srWindow.Right - info.srWindow.Left + 1;
        m_height    = info.srWindow.Bottom - info.srWindow.Top + 1;

        m_maximum_width     = info.dwMaximumWindowSize.X;
        m_maximum_height    = info.dwMaximumWindowSize.Y;

        m_cursor_x  = info.dwCursorPosition.X;
        m_cursor_y  = info.dwCursorPosition.Y;

        m_foreground_color  = info.wAttributes & 0xf;
        m_background_color  = info.wAttributes & 0xf0;

        m_color             = info.wAttributes;
    }else{

    }

}

T200VOID T200Win10Tui::set_color()
{

}

T200VOID T200Win10Tui::get_color()
{

}

T200VOID T200Win10Tui::set_attribute()
{

}

T200VOID T200Win10Tui::get_attribute()
{
    HANDLE  console = GetStdHandle(STD_OUTPUT_HANDLE);
    CONSOLE_SCREEN_BUFFER_INFO  info;

    if(GetConsoleScreenBufferInfo(console, &info)){
        m_width     = info.srWindow.Right - info.srWindow.Left + 1;
        m_height    = info.srWindow.Bottom - info.srWindow.Top + 1;
    }else{

    }
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

T200VOID T200Win10Tui::settextcolor(T200INT color)
{
    HANDLE console = GetStdHandle(STD_OUTPUT_HANDLE);

    SetConsoleTextAttribute(console, FOREGROUND_RED | BACKGROUND_BLUE);
}

T200VOID T200Win10Tui::setbackgroundcolor(T200INT color)
{

}

T200VOID T200Win10Tui::clear()
{
    HANDLE  console = GetStdHandle(STD_OUTPUT_HANDLE);
    COORD   coord = {0, 0};
    DWORD   length;
    DWORD   written;

    length = m_width * m_height;

    FillConsoleOutputCharacter(console, ' ', length, coord, &written);

    FlushConsoleInputBuffer(console);
}

