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
    clear();
    draw_title();
    clear();
}


T200VOID T200TuiDialogBase::clear()
{
    T200Tui         tui;

    tui.get_info();
    tui.clear();
}

T200VOID T200TuiDialogBase::draw_title()
{
    T200Tui         tui;

    tui.settextcolor(1);
    tui.moveto(0, 0);

    tui.print("title");
    tui.moveto(0, 1);
    tui.print("-");
}

T200VOID T200TuiDialogBase::draw_panel()
{
    T200Tui         tui;


}
