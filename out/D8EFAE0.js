goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__241920__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__241920 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__241921__i = 0, G__241921__a = new Array(arguments.length -  0);
while (G__241921__i < G__241921__a.length) {G__241921__a[G__241921__i] = arguments[G__241921__i + 0]; ++G__241921__i;}
  args = new cljs.core.IndexedSeq(G__241921__a,0);
} 
return G__241920__delegate.call(this,args);};
G__241920.cljs$lang$maxFixedArity = 0;
G__241920.cljs$lang$applyTo = (function (arglist__241922){
var args = cljs.core.seq(arglist__241922);
return G__241920__delegate(args);
});
G__241920.cljs$core$IFn$_invoke$arity$variadic = G__241920__delegate;
return G__241920;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__241923__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__241923 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__241924__i = 0, G__241924__a = new Array(arguments.length -  0);
while (G__241924__i < G__241924__a.length) {G__241924__a[G__241924__i] = arguments[G__241924__i + 0]; ++G__241924__i;}
  args = new cljs.core.IndexedSeq(G__241924__a,0);
} 
return G__241923__delegate.call(this,args);};
G__241923.cljs$lang$maxFixedArity = 0;
G__241923.cljs$lang$applyTo = (function (arglist__241925){
var args = cljs.core.seq(arglist__241925);
return G__241923__delegate(args);
});
G__241923.cljs$core$IFn$_invoke$arity$variadic = G__241923__delegate;
return G__241923;
})()
;

return null;
});
