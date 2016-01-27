goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__30924__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__30924 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30925__i = 0, G__30925__a = new Array(arguments.length -  0);
while (G__30925__i < G__30925__a.length) {G__30925__a[G__30925__i] = arguments[G__30925__i + 0]; ++G__30925__i;}
  args = new cljs.core.IndexedSeq(G__30925__a,0);
} 
return G__30924__delegate.call(this,args);};
G__30924.cljs$lang$maxFixedArity = 0;
G__30924.cljs$lang$applyTo = (function (arglist__30926){
var args = cljs.core.seq(arglist__30926);
return G__30924__delegate(args);
});
G__30924.cljs$core$IFn$_invoke$arity$variadic = G__30924__delegate;
return G__30924;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__30927__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__30927 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30928__i = 0, G__30928__a = new Array(arguments.length -  0);
while (G__30928__i < G__30928__a.length) {G__30928__a[G__30928__i] = arguments[G__30928__i + 0]; ++G__30928__i;}
  args = new cljs.core.IndexedSeq(G__30928__a,0);
} 
return G__30927__delegate.call(this,args);};
G__30927.cljs$lang$maxFixedArity = 0;
G__30927.cljs$lang$applyTo = (function (arglist__30929){
var args = cljs.core.seq(arglist__30929);
return G__30927__delegate(args);
});
G__30927.cljs$core$IFn$_invoke$arity$variadic = G__30927__delegate;
return G__30927;
})()
;

return null;
});
