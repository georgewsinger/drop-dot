goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13920__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13920 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13921__i = 0, G__13921__a = new Array(arguments.length -  0);
while (G__13921__i < G__13921__a.length) {G__13921__a[G__13921__i] = arguments[G__13921__i + 0]; ++G__13921__i;}
  args = new cljs.core.IndexedSeq(G__13921__a,0);
} 
return G__13920__delegate.call(this,args);};
G__13920.cljs$lang$maxFixedArity = 0;
G__13920.cljs$lang$applyTo = (function (arglist__13922){
var args = cljs.core.seq(arglist__13922);
return G__13920__delegate(args);
});
G__13920.cljs$core$IFn$_invoke$arity$variadic = G__13920__delegate;
return G__13920;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13923__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13923 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13924__i = 0, G__13924__a = new Array(arguments.length -  0);
while (G__13924__i < G__13924__a.length) {G__13924__a[G__13924__i] = arguments[G__13924__i + 0]; ++G__13924__i;}
  args = new cljs.core.IndexedSeq(G__13924__a,0);
} 
return G__13923__delegate.call(this,args);};
G__13923.cljs$lang$maxFixedArity = 0;
G__13923.cljs$lang$applyTo = (function (arglist__13925){
var args = cljs.core.seq(arglist__13925);
return G__13923__delegate(args);
});
G__13923.cljs$core$IFn$_invoke$arity$variadic = G__13923__delegate;
return G__13923;
})()
;

return null;
});
