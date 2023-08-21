#include "T200LibDisplay.h"

#include <iostream>


T200LibDisplay::T200LibDisplay()
{
    //ctor
}

T200LibDisplay::~T200LibDisplay()
{
    //dtor
}

T200BOOL T200LibDisplay::setMode(T200DISPLAY_MODE mode)
{
    return T200FALSE;
}

T200BOOL T200LibDisplay::print(T200String msg)
{
    std::cout << msg;
    //printf("%s", msg);
    return T200FALSE;
}

T200BOOL T200LibDisplay::moveto(T200INT x, T200INT y)
{
    printf("\033[%d;%dH", y, x);
    return T200FALSE;
}

std::ostream & operator<<(std::ostream & os, const T200String & c)
{
    return os << c.m_string;
}
