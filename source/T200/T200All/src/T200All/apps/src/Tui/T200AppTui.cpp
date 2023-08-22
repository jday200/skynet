#include "T200AppTui.h"

#include "T200TuiDialog.h"


T200AppTui::T200AppTui()
{
    //ctor
}

T200AppTui::~T200AppTui()
{
    //dtor
}

T200VOID T200AppTui::run()
{
    T200TuiDialog       dialog;

    dialog.show();
}
