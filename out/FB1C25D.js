goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__323920__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__323920 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__323921__i = 0, G__323921__a = new Array(arguments.length -  0);
while (G__323921__i < G__323921__a.length) {G__323921__a[G__323921__i] = arguments[G__323921__i + 0]; ++G__323921__i;}
  args = new cljs.core.IndexedSeq(G__323921__a,0);
} 
return G__323920__delegate.call(this,args);};
G__323920.cljs$lang$maxFixedArity = 0;
G__323920.cljs$lang$applyTo = (function (arglist__323922){
var args = cljs.core.seq(arglist__323922);
return G__323920__delegate(args);
});
G__323920.cljs$core$IFn$_invoke$arity$variadic = G__323920__delegate;
return G__323920;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__323923__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__323923 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__323924__i = 0, G__323924__a = new Array(arguments.length -  0);
while (G__323924__i < G__323924__a.length) {G__323924__a[G__323924__i] = arguments[G__323924__i + 0]; ++G__323924__i;}
  args = new cljs.core.IndexedSeq(G__323924__a,0);
} 
return G__323923__delegate.call(this,args);};
G__323923.cljs$lang$maxFixedArity = 0;
G__323923.cljs$lang$applyTo = (function (arglist__323925){
var args = cljs.core.seq(arglist__323925);
return G__323923__delegate(args);
});
G__323923.cljs$core$IFn$_invoke$arity$variadic = G__323923__delegate;
return G__323923;
})()
;

return null;
});
