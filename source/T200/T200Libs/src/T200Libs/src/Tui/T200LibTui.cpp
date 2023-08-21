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
    m_display = T200NEW T200LibDisplay();
    m_display->setMode(T200DISPLAY_TEXT_MODE);
}

T200VOID T200LibTui::destroy()
{
    T200DELETE m_display;
}

T200VOID T200LibTui::print(T200String msg)
{
    m_display->print(msg);
}

T200VOID T200LibTui::moveto(T200INT x, T200INT y)
{
    m_display->moveto(x, y);
}
