<?php

namespace App\Http\Controllers\Api;

use Illuminate\Support\Facades\DB;

class TaskController extends Controller
{
    public function taskList()
    {
        $task = DB::connection('cus')
            ->table('V_task_detail')
            ->orderBy("机台系统编号")
            ->orderBy("排序")
            ->get();

        return $this->success([
            'task' => $task,
        ]);

    }
}
