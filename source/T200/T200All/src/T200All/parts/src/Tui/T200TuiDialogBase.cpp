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



    tui.settextcolor(0);
    tui.print("\x1b[44m\x1b[37mHello, World!\x1b[0m");

    for(int j=0;j<50;j++){
    for(int i=0;i<100;i++){
        tui.print(" ");
    }
    }
}
