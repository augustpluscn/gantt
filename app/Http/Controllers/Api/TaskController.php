<?php

namespace App\Http\Controllers\Api;

use Illuminate\Support\Facades\DB;

class TaskController extends Controller
{
    public function taskList()
    {
        $task = DB::connection('cus')->table('V_task_detail')->get();

        return $this->success([
            'task' => $task,
        ]);

    }
}
