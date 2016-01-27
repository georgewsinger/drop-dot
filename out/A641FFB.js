goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__34607__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__34607 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34608__i = 0, G__34608__a = new Array(arguments.length -  0);
while (G__34608__i < G__34608__a.length) {G__34608__a[G__34608__i] = arguments[G__34608__i + 0]; ++G__34608__i;}
  args = new cljs.core.IndexedSeq(G__34608__a,0);
} 
return G__34607__delegate.call(this,args);};
G__34607.cljs$lang$maxFixedArity = 0;
G__34607.cljs$lang$applyTo = (function (arglist__34609){
var args = cljs.core.seq(arglist__34609);
return G__34607__delegate(args);
});
G__34607.cljs$core$IFn$_invoke$arity$variadic = G__34607__delegate;
return G__34607;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__34610__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__34610 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34611__i = 0, G__34611__a = new Array(arguments.length -  0);
while (G__34611__i < G__34611__a.length) {G__34611__a[G__34611__i] = arguments[G__34611__i + 0]; ++G__34611__i;}
  args = new cljs.core.IndexedSeq(G__34611__a,0);
} 
return G__34610__delegate.call(this,args);};
G__34610.cljs$lang$maxFixedArity = 0;
G__34610.cljs$lang$applyTo = (function (arglist__34612){
var args = cljs.core.seq(arglist__34612);
return G__34610__delegate(args);
});
G__34610.cljs$core$IFn$_invoke$arity$variadic = G__34610__delegate;
return G__34610;
})()
;

return null;
});
