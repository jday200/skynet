#include "T200LibTui.h"

#include "T200LibDisplay.h"


T200LibTui::T200LibTui()
    : T200Class()
{
    //ctor
    create();
}

T200LibTui::~T200LibTui()
{
    //dtor
    destroy();
}

T200VOID T200LibTui::create()
{
    T200LibDisplay::setMode(T200DISPLAY_TEXT_MODE);
}

T200VOID T200LibTui::destroy()
{

}

T200VOID T200LibTui::print(T200String msg)
{
    T200LibDisplay::print(msg);
}
