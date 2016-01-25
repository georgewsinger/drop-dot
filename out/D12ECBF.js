goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__252822__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__252822 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__252823__i = 0, G__252823__a = new Array(arguments.length -  0);
while (G__252823__i < G__252823__a.length) {G__252823__a[G__252823__i] = arguments[G__252823__i + 0]; ++G__252823__i;}
  args = new cljs.core.IndexedSeq(G__252823__a,0);
} 
return G__252822__delegate.call(this,args);};
G__252822.cljs$lang$maxFixedArity = 0;
G__252822.cljs$lang$applyTo = (function (arglist__252824){
var args = cljs.core.seq(arglist__252824);
return G__252822__delegate(args);
});
G__252822.cljs$core$IFn$_invoke$arity$variadic = G__252822__delegate;
return G__252822;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__252825__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__252825 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__252826__i = 0, G__252826__a = new Array(arguments.length -  0);
while (G__252826__i < G__252826__a.length) {G__252826__a[G__252826__i] = arguments[G__252826__i + 0]; ++G__252826__i;}
  args = new cljs.core.IndexedSeq(G__252826__a,0);
} 
return G__252825__delegate.call(this,args);};
G__252825.cljs$lang$maxFixedArity = 0;
G__252825.cljs$lang$applyTo = (function (arglist__252827){
var args = cljs.core.seq(arglist__252827);
return G__252825__delegate(args);
});
G__252825.cljs$core$IFn$_invoke$arity$variadic = G__252825__delegate;
return G__252825;
})()
;

return null;
});
