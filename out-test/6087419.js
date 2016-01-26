goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14409__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14409 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14410__i = 0, G__14410__a = new Array(arguments.length -  0);
while (G__14410__i < G__14410__a.length) {G__14410__a[G__14410__i] = arguments[G__14410__i + 0]; ++G__14410__i;}
  args = new cljs.core.IndexedSeq(G__14410__a,0);
} 
return G__14409__delegate.call(this,args);};
G__14409.cljs$lang$maxFixedArity = 0;
G__14409.cljs$lang$applyTo = (function (arglist__14411){
var args = cljs.core.seq(arglist__14411);
return G__14409__delegate(args);
});
G__14409.cljs$core$IFn$_invoke$arity$variadic = G__14409__delegate;
return G__14409;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14412__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14412 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14413__i = 0, G__14413__a = new Array(arguments.length -  0);
while (G__14413__i < G__14413__a.length) {G__14413__a[G__14413__i] = arguments[G__14413__i + 0]; ++G__14413__i;}
  args = new cljs.core.IndexedSeq(G__14413__a,0);
} 
return G__14412__delegate.call(this,args);};
G__14412.cljs$lang$maxFixedArity = 0;
G__14412.cljs$lang$applyTo = (function (arglist__14414){
var args = cljs.core.seq(arglist__14414);
return G__14412__delegate(args);
});
G__14412.cljs$core$IFn$_invoke$arity$variadic = G__14412__delegate;
return G__14412;
})()
;

return null;
});
