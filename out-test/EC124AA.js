goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__34538__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__34538 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34539__i = 0, G__34539__a = new Array(arguments.length -  0);
while (G__34539__i < G__34539__a.length) {G__34539__a[G__34539__i] = arguments[G__34539__i + 0]; ++G__34539__i;}
  args = new cljs.core.IndexedSeq(G__34539__a,0);
} 
return G__34538__delegate.call(this,args);};
G__34538.cljs$lang$maxFixedArity = 0;
G__34538.cljs$lang$applyTo = (function (arglist__34540){
var args = cljs.core.seq(arglist__34540);
return G__34538__delegate(args);
});
G__34538.cljs$core$IFn$_invoke$arity$variadic = G__34538__delegate;
return G__34538;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__34541__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__34541 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34542__i = 0, G__34542__a = new Array(arguments.length -  0);
while (G__34542__i < G__34542__a.length) {G__34542__a[G__34542__i] = arguments[G__34542__i + 0]; ++G__34542__i;}
  args = new cljs.core.IndexedSeq(G__34542__a,0);
} 
return G__34541__delegate.call(this,args);};
G__34541.cljs$lang$maxFixedArity = 0;
G__34541.cljs$lang$applyTo = (function (arglist__34543){
var args = cljs.core.seq(arglist__34543);
return G__34541__delegate(args);
});
G__34541.cljs$core$IFn$_invoke$arity$variadic = G__34541__delegate;
return G__34541;
})()
;

return null;
});
