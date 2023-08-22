#include "T200String.h"

T200String::T200String()
{
    //ctor
}

T200String::T200String(const char* msg)
{
    m_string = msg;
}

T200String::~T200String()
{
    //dtor
}

std::ostream & operator << (std::ostream & os, const T200String & msg)
{
    return os << msg.m_string;
}
