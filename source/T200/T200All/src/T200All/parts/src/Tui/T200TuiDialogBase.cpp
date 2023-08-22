#include "T200TuiDialogBase.h"

#include "T200Tui.h"


T200TuiDialogBase::T200TuiDialogBase()
{
    //ctor
}

T200TuiDialogBase::~T200TuiDialogBase()
{
    //dtor
}

T200VOID T200TuiDialogBase::draw()
{
    T200Tui         tui;

    tui.moveto(10, 10);
    tui.print("1111111111111111111111111111111111111");

    tui.moveto(10,20);
    tui.print("1111111111111111111111111111111111111");
}
