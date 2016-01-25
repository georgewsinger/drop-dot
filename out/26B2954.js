goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10495__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10495 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10496__i = 0, G__10496__a = new Array(arguments.length -  0);
while (G__10496__i < G__10496__a.length) {G__10496__a[G__10496__i] = arguments[G__10496__i + 0]; ++G__10496__i;}
  args = new cljs.core.IndexedSeq(G__10496__a,0);
} 
return G__10495__delegate.call(this,args);};
G__10495.cljs$lang$maxFixedArity = 0;
G__10495.cljs$lang$applyTo = (function (arglist__10497){
var args = cljs.core.seq(arglist__10497);
return G__10495__delegate(args);
});
G__10495.cljs$core$IFn$_invoke$arity$variadic = G__10495__delegate;
return G__10495;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10498__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10498 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10499__i = 0, G__10499__a = new Array(arguments.length -  0);
while (G__10499__i < G__10499__a.length) {G__10499__a[G__10499__i] = arguments[G__10499__i + 0]; ++G__10499__i;}
  args = new cljs.core.IndexedSeq(G__10499__a,0);
} 
return G__10498__delegate.call(this,args);};
G__10498.cljs$lang$maxFixedArity = 0;
G__10498.cljs$lang$applyTo = (function (arglist__10500){
var args = cljs.core.seq(arglist__10500);
return G__10498__delegate(args);
});
G__10498.cljs$core$IFn$_invoke$arity$variadic = G__10498__delegate;
return G__10498;
})()
;

return null;
});
