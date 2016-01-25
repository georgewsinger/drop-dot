goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__31580__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__31580 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31581__i = 0, G__31581__a = new Array(arguments.length -  0);
while (G__31581__i < G__31581__a.length) {G__31581__a[G__31581__i] = arguments[G__31581__i + 0]; ++G__31581__i;}
  args = new cljs.core.IndexedSeq(G__31581__a,0);
} 
return G__31580__delegate.call(this,args);};
G__31580.cljs$lang$maxFixedArity = 0;
G__31580.cljs$lang$applyTo = (function (arglist__31582){
var args = cljs.core.seq(arglist__31582);
return G__31580__delegate(args);
});
G__31580.cljs$core$IFn$_invoke$arity$variadic = G__31580__delegate;
return G__31580;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__31583__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__31583 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31584__i = 0, G__31584__a = new Array(arguments.length -  0);
while (G__31584__i < G__31584__a.length) {G__31584__a[G__31584__i] = arguments[G__31584__i + 0]; ++G__31584__i;}
  args = new cljs.core.IndexedSeq(G__31584__a,0);
} 
return G__31583__delegate.call(this,args);};
G__31583.cljs$lang$maxFixedArity = 0;
G__31583.cljs$lang$applyTo = (function (arglist__31585){
var args = cljs.core.seq(arglist__31585);
return G__31583__delegate(args);
});
G__31583.cljs$core$IFn$_invoke$arity$variadic = G__31583__delegate;
return G__31583;
})()
;

return null;
});
