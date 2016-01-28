goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__384694__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__384694 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__384695__i = 0, G__384695__a = new Array(arguments.length -  0);
while (G__384695__i < G__384695__a.length) {G__384695__a[G__384695__i] = arguments[G__384695__i + 0]; ++G__384695__i;}
  args = new cljs.core.IndexedSeq(G__384695__a,0);
} 
return G__384694__delegate.call(this,args);};
G__384694.cljs$lang$maxFixedArity = 0;
G__384694.cljs$lang$applyTo = (function (arglist__384696){
var args = cljs.core.seq(arglist__384696);
return G__384694__delegate(args);
});
G__384694.cljs$core$IFn$_invoke$arity$variadic = G__384694__delegate;
return G__384694;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__384697__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__384697 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__384698__i = 0, G__384698__a = new Array(arguments.length -  0);
while (G__384698__i < G__384698__a.length) {G__384698__a[G__384698__i] = arguments[G__384698__i + 0]; ++G__384698__i;}
  args = new cljs.core.IndexedSeq(G__384698__a,0);
} 
return G__384697__delegate.call(this,args);};
G__384697.cljs$lang$maxFixedArity = 0;
G__384697.cljs$lang$applyTo = (function (arglist__384699){
var args = cljs.core.seq(arglist__384699);
return G__384697__delegate(args);
});
G__384697.cljs$core$IFn$_invoke$arity$variadic = G__384697__delegate;
return G__384697;
})()
;

return null;
});
