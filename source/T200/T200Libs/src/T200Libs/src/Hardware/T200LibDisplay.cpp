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

T200VOID T200LibDisplay::print(T200String msg)
{
    std::cout << msg;
}


std::ostream & operator<<(std::ostream & os, const T200String & c)
{
    return os << c.m_string;
}
