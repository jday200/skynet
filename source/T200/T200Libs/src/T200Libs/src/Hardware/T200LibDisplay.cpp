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
    //std::cout << msg;
    return T200FALSE;
}
