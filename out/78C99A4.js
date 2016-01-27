goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__301967__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__301967 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__301968__i = 0, G__301968__a = new Array(arguments.length -  0);
while (G__301968__i < G__301968__a.length) {G__301968__a[G__301968__i] = arguments[G__301968__i + 0]; ++G__301968__i;}
  args = new cljs.core.IndexedSeq(G__301968__a,0);
} 
return G__301967__delegate.call(this,args);};
G__301967.cljs$lang$maxFixedArity = 0;
G__301967.cljs$lang$applyTo = (function (arglist__301969){
var args = cljs.core.seq(arglist__301969);
return G__301967__delegate(args);
});
G__301967.cljs$core$IFn$_invoke$arity$variadic = G__301967__delegate;
return G__301967;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__301970__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__301970 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__301971__i = 0, G__301971__a = new Array(arguments.length -  0);
while (G__301971__i < G__301971__a.length) {G__301971__a[G__301971__i] = arguments[G__301971__i + 0]; ++G__301971__i;}
  args = new cljs.core.IndexedSeq(G__301971__a,0);
} 
return G__301970__delegate.call(this,args);};
G__301970.cljs$lang$maxFixedArity = 0;
G__301970.cljs$lang$applyTo = (function (arglist__301972){
var args = cljs.core.seq(arglist__301972);
return G__301970__delegate(args);
});
G__301970.cljs$core$IFn$_invoke$arity$variadic = G__301970__delegate;
return G__301970;
})()
;

return null;
});
