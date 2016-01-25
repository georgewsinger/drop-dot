goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__18922__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__18922 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18923__i = 0, G__18923__a = new Array(arguments.length -  0);
while (G__18923__i < G__18923__a.length) {G__18923__a[G__18923__i] = arguments[G__18923__i + 0]; ++G__18923__i;}
  args = new cljs.core.IndexedSeq(G__18923__a,0);
} 
return G__18922__delegate.call(this,args);};
G__18922.cljs$lang$maxFixedArity = 0;
G__18922.cljs$lang$applyTo = (function (arglist__18924){
var args = cljs.core.seq(arglist__18924);
return G__18922__delegate(args);
});
G__18922.cljs$core$IFn$_invoke$arity$variadic = G__18922__delegate;
return G__18922;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__18925__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__18925 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18926__i = 0, G__18926__a = new Array(arguments.length -  0);
while (G__18926__i < G__18926__a.length) {G__18926__a[G__18926__i] = arguments[G__18926__i + 0]; ++G__18926__i;}
  args = new cljs.core.IndexedSeq(G__18926__a,0);
} 
return G__18925__delegate.call(this,args);};
G__18925.cljs$lang$maxFixedArity = 0;
G__18925.cljs$lang$applyTo = (function (arglist__18927){
var args = cljs.core.seq(arglist__18927);
return G__18925__delegate(args);
});
G__18925.cljs$core$IFn$_invoke$arity$variadic = G__18925__delegate;
return G__18925;
})()
;

return null;
});
